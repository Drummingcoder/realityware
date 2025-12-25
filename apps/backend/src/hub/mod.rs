use crate::db::DbConn;
use crate::db::schema::users::dsl::*;
use crate::prelude::*;
use crate::html_injection::inject_data_into_html;
use diesel::prelude::*;
use rocket::http::{Status/*, ContentType*/};
use rocket::response::content::RawHtml;
use uuid::Uuid;
use serde::Serialize;

#[derive(Serialize)]
struct HubData {
    username: String,
    tickets: i32,
}

#[get("/hub")]
pub async fn hub(cookies: &CookieJar<'_>, conn: DbConn) -> Result<RawHtml<String>, Status> {
    // Get user id from signed cookie first
    println!("HUB START");
    dbg!(&cookies);
    dbg!(&cookies.get_private("auth"));
    let user_id: Uuid = cookies
        .get_private("auth")
        .and_then(|c| Uuid::parse_str(c.value()).ok())
        .ok_or(Status::Unauthorized)?;
    dbg!(user_id);

    // Run DB query inside async `.run()`
    conn.run(move |c| {
        // `c` is &mut PgConnection here
        let result = users
            .filter(id.eq(user_id))
            .select((username, tickets))
            .first::<(String, i32)>(c); // explicitly specify type
        dbg!(&result);

        match result {
            Ok((username_val, tickets_val)) => {
                inject_data_into_html(
                    "static/hub/index.html",
                    HubData {
                        username: username_val,
                        tickets: tickets_val,
                    }
                )
            },
            Err(_) => Err(Status::Unauthorized),
        }
    })
    .await
}
