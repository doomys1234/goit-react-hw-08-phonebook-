export const getUsername = state => state.auth.user.name;
export const getStatus = state => state.auth.isLoggedIn

const authSelectors = {
    getUsername,
    getStatus,
}

export default authSelectors;