import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
 _______  _______  __   __  ___   __    _  ______  
|       ||       ||  | |  ||   | |  |  | ||      | 
|    ___||   _   ||  |_|  ||   | |   |_| ||  _    |
|   | __ |  | |  ||       ||   | |       || | |   |
|   ||  ||  |_|  ||       ||   | |  _    || |_|   |
|   |_| ||       | |     | |   | | | |   ||       |
|_______||_______|  |___|  |___| |_|  |__||______| 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 _______  _______  __   __  ___   __    _  ______  
|       ||       ||  | |  ||   | |  |  | ||      | 
|    ___||   _   ||  |_|  ||   | |   |_| ||  _    |
|   | __ |  | |  ||       ||   | |       || | |   |
|   ||  ||  |_|  ||       ||   | |  _    || |_|   |
|   |_| ||       | |     | |   | | | |   ||       |
|_______||_______|  |___|  |___| |_|  |__||______| 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my portfolio. (Version 127.0.0.1)</div>
        <Seperator>----</Seperator>
        <div>
          Check me out on{" "}
          <Link href="https://github.com/Govind-Deshmukh">GitHub</Link>{" "}
          <Link href="https://www.linkedin.com/in/govind-deshmukh/">
            LinkedIn
          </Link>{" "}
          <Link href="https://wa.me/+917620929189">What's App</Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
