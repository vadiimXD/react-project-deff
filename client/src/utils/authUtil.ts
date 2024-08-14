export function getUser() {
    const authStringify: any = localStorage.getItem("auth")
    const auth = JSON.parse(authStringify)
    return auth
}