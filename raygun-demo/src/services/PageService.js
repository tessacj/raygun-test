export async function getPageData(data) {
    const response = await fetch(`http://localhost:3800/api/pages`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"requestPage": data})
      })
    return await response.json();
}