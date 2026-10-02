type requestBody = {
    Semester: string;
    Language: 'en' | 'zh';
    EduCode: string;
}

const myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Referer", "https://querycourse.ntust.edu.tw/querycourse/");
myHeaders.append("Content-Type", "application/json; charset=utf-8");
myHeaders.append("Origin", "https://querycourse.ntust.edu.tw");

export async function fetchNtustCourses(body: requestBody): Promise<string | JSON> {
    const url = "https://querycourse.ntust.edu.tw/QueryCourse/api//CourseSchedule";

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`NTUST request failed: ${response.status} ${text}`);
    }

    try {
        return await response.json();
    } catch {
        return await response.text();
    }
}

export async function fetchAllEnglishClasses(body: requestBody): Promise<string | JSON> {
    const url = "https://querycourse.ntust.edu.tw/QueryCourse/api//courses";

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`NTUST request failed: ${response.status} ${text}`);
    }

    try {
        return await response.json();
    } catch {
        return await response.text();
    }
}