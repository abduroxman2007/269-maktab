import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Developers")}</Language>
              <Chat><a href="https://t.me/behruzzo662">Behruz</a></Chat>
              <Chat><a href="https://t.me/abdurokhmanovv">Abdurohman</a></Chat>
              <Large to="/">{t("Savollaringiz bormi?")}</Large>
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Title>{t("Ma'lumotlar")}</Title>
            <Large to="/">{t("Maktabimiz haqida")}</Large>
            <Large to="/">{t("Maqsad va vazifalar")}</Large>
            <Large to="/">{t("Yangiliklar")}</Large>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Empty />
            <Large to="/">{t("Yordam markazi")}</Large>
            <Large to="/">{t("O'quvchilar uchun qo'llab-quvvatlash")}</Large>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <Empty />
            <Language>{t("Manzil")}</Language>
            <Para>Toshkent shahar</Para>
            <Para>269-sonli maktab</Para>
            <Para>O'zbekiston</Para>
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Title>{t("Biz haqimizda")}</Title>
            <Large to="/">{t("Maktab tarixi")}</Large>
            <Large to="/">{t("Blog")}</Large>
            <Large to="/">{t("Maktab faoliyati")}</Large>
            <Large to="/">{t("Madaniyat va qadriyatlar")}</Large>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Label htmlFor="select-lang">{t("Tilni tanlang")}</Label>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("uz")}>
                <SvgIcon
                  src="spain.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-states.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
            </LanguageSwitchContainer>

          </Col>
        </Row>
      </Container>
    </FooterSection >
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {/* <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              /> */}
              <SocialLink
                href="https://facebook.com/"
                src="facebook-f.svg"
              />
              <SocialLink
                href="https://www.instagram.com/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://t.me/+JTbziEM9JqtiMDAy"
                src="telegram.svg"
              />
            </FooterContainer>
          </Row>
          {/* <FooterContainer>
              <Para>&copy; {new Date().getFullYear()} 269-sonli maktab. Barcha huquqlar himoyalangan.</Para>
            </FooterContainer>
          </Row> */}
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
