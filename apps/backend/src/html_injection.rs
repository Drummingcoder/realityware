use rocket::http::ContentType;
use rocket::response::content::RawHtml;
use rocket::http::Status;
use std::fs;
use serde::Serialize;
use serde_json;

pub fn inject_data_into_html<T: Serialize>(
    html_path: &str,
    data: T,
) -> Result<RawHtml<String>, Status> {
    let html = fs::read_to_string(html_path)
        .map_err(|_| Status::InternalServerError)?;
    
    let json_data = serde_json::to_string(&data)
        .map_err(|_| Status::InternalServerError)?;
    
    let injection = format!(
        r#"<script>window.__INITIAL_DATA__ = {};</script></body>"#,
        json_data
    );
    
    let modified_html = html.replace("</body>", &injection);
    Ok(RawHtml(modified_html))
}
