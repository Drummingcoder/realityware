use crate::prelude::*;
use crate::html_injection::inject_data_into_html;
use rocket::response::content::RawHtml;
use rocket::http::Status;
use serde::Serialize;

#[derive(Serialize)]
struct GalleryData {
    username: Option<String>,
}

#[get("/gallery")]
pub fn gallery(cookies: &CookieJar<'_>) -> Result<RawHtml<String>, Status> {
    let username = cookies
        .get("username")
        .map(|c| c.value().to_string());
    
    inject_data_into_html(
        "static/gallery/index.html",
        GalleryData { username }
    )
}
