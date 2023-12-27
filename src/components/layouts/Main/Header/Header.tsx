import Button from "@/components/common/Button/Button";
import React from "react";
import { VscColorMode } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src=
          "https://cdn.discordapp.com/attachments/451111074922627088/1189626822573445180/image.png?ex=659ed950&is=658c6450&hm=e738792b8904a8d93b35ec7e45a753db87618be29b30342f1dfcbc5935def863&"></Style.Img>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscColorMode />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
