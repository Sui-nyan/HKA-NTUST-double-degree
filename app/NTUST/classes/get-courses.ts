const myHeaders = new Headers();
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Accept-Encoding", "gzip, deflate, br, zstd");
myHeaders.append("Referer", "https://querycourse.ntust.edu.tw/querycourse/");
myHeaders.append("Content-Type", "application/json; charset=utf-8");
myHeaders.append("Origin", "https://querycourse.ntust.edu.tw");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Priority", "u=0");
myHeaders.append("TE", "trailers");

type requestBody = {
    Semester: string;
    Language: 'en' | 'zh';
    EduCode: string;
}

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: null,
    redirect: "follow" as RequestRedirect,
};

fetch("https://querycourse.ntust.edu.tw/QueryCourse/api//CourseSchedule", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));