import AuthStyle from "../authComponents/style";

export default class WallStyle {

    static darkerWhiteColor = "#f6f6f6"
    static whiteColor = "#fff"
    static gradientColor = AuthStyle.gradientColor

    static wallStyle = {
        height: "100%",
        display: "flex",
        justifyContent: "center"
    }

    static postsStyle = {
        // display: "flex",
        // gap: "10px"
        // maxWidth: "60%",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center"
    }

    static createPostStyle = {
        margin: "2em"
    }

    static singlePostStyle = {
        margin: "10px"
    }

}