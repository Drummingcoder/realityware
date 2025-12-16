#[macro_use]
extern crate rocket;
use crate::auth::HCA;
use crate::auth::{callback, slack_login};
use rocket::fs::{FileServer, NamedFile};
use rocket::http::Status;
use rocket_oauth2::OAuth2;
use std::path::PathBuf;

mod auth;
mod db;
mod gallery;
mod hub;
mod hub_test;
mod html_injection;
mod prelude;
mod projects;
mod shop;
mod voting;

use crate::prelude::*;

// Serve Next.js static files
// This catches all routes and tries to serve them from the static directory
#[get("/<path..>", rank = 10)]
async fn nextjs_files(path: PathBuf) -> Option<NamedFile> {
    let mut file_path = PathBuf::from("static");
    file_path.push(&path);
    
    // Try to serve the requested file
    if let Ok(file) = NamedFile::open(&file_path).await {
        return Some(file);
    }
    
    // If it's a directory, try index.html
    file_path.push("index.html");
    NamedFile::open(&file_path).await.ok()
}

// Root index - serve Next.js home page
#[get("/", rank = 1)]
async fn index() -> Option<NamedFile> {
    NamedFile::open("static/index.html").await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::fairing())
        .attach(OAuth2::<HCA>::fairing("hca"))
        .attach(db::DbConn::fairing())
        .mount(
            "/",
            routes![
                index,
                slack_login,
                callback,
                hub::hub,
                hub_test::hub_test,
                gallery::gallery,
                projects::projects,
                shop::shop,
                voting::voting,
                nextjs_files
            ],
        )
}
