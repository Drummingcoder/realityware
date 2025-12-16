use crate::html_injection::inject_data_into_html;
use rocket::response::content::RawHtml;
use rocket::http::Status;
use serde::Serialize;

#[derive(Serialize)]
struct TestData {
    username: String,
    tickets: i32,
    test: bool,
}

#[get("/hub-test")]
pub fn hub_test() -> Result<RawHtml<String>, Status> {
    inject_data_into_html(
        "static/hub/index.html",
        TestData {
            username: "TestUser".to_string(),
            tickets: 999,
            test: true,
        }
    )
}
