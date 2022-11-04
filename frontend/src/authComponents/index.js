import {Animator, batch, Fade, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";
import LoginComponent from "./loginComponent";
import RegisterComponent from "./registerComponent";
import AuthStyle from "./style";

const AuthComponent = () => {

    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    {<LoginComponent/>}
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div style={{pointerEvents: "none", position: "relative"}}>
                    <Animator animation={batch(MoveIn(1000, 250), Sticky())}>
                        <div style={AuthStyle.formDecoration}>
                            <Animator animation={batch(Fade(), Sticky(75, 55))}>
                                {<RegisterComponent/>}
                            </Animator>
                        </div>
                    </Animator>
                </div>
            </ScrollPage>
        </ScrollContainer>
    );
};

export default AuthComponent;