
export default class AuthStyle {

    static inputColor = "#e3e3e3"
    static gradientColor = "linear-gradient(90deg, rgba(8,174,234,1) 45%, rgba(42,245,152,1) 100%)"

    static loginInputStyle = {
        backgroundColor: this.inputColor,
        borderRadius: "20px",
        border: "none",
        height: "3em",
        width: "100%",
        margin: "0.3em 0",
        textAlign: "center",
        fontSize: "1em",
        overflow: "visible"
    }

    static registerInputStyle = {
        borderRadius: "20px",
        border: "1px solid #AAA",
        height: "3em",
        width: "100%",
        margin: "0.3em auto",
        textAlign: "center",
        fontSize: "0.4em",
        pointerEvents: "all",
    }

    static registerStyle = {
        color: "#ffffff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto",
    }

    static loginButtonStyle = {
        borderRadius: "20px",
        textTransform: "Uppercase",
        border: "none",
        height: "3em",
        width: "100%",
        color: "white",
        background: this.gradientColor,
        fontFamily: "Roboto",
        fontSize: "0.8em",
        margin: "auto"
    }

    static registerButtonStyle = {
        margin: "0.3em auto",
        borderRadius: "20px",
        textTransform: "Uppercase",
        border: "none",
        fontFamily: "Roboto",
        height: "3em",
        width: "100%",
        color: "white",
        background: "#0096ff",
        pointerEvents: "all"
    }

    static formDecoration = {
        margin: "auto",
        width: "150vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3ClinearGradient id=%22linearGradientId%22 gradientTransform=%22rotate(-45 0.5 0.5)%22%3E %3Cstop offset=%220%25%22 stop-color=%22%2308AEEA%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%232AF598%22 %2F%3E %3C%2FlinearGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M808%2C626Q701%2C752%2C572.5%2C748.5Q444%2C745%2C271.5%2C719Q99%2C693%2C79%2C490.5Q59%2C288%2C231%2C181Q403%2C74%2C582%2C123.5Q761%2C173%2C838%2C336.5Q915%2C500%2C808%2C626Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23linearGradientId)%22 d=%22M808%2C626Q701%2C752%2C572.5%2C748.5Q444%2C745%2C271.5%2C719Q99%2C693%2C79%2C490.5Q59%2C288%2C231%2C181Q403%2C74%2C582%2C123.5Q761%2C173%2C838%2C336.5Q915%2C500%2C808%2C626Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E")',
    }

    static registerPrompts = {
        margin: "0.2em 0",
        padding: "0"
    }

    static greenText = {
        color: "#16de93"
    }
}