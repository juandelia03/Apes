<template>
  <div class="wrap">
    <div class="mint-wrap">
      <button class="mint-button" @click="alert">
        <h1>mint</h1>
      </button>
    </div>
    <img :src="require('@/assets/Hero.jpeg')" class="heroBg" />
    <div class="textWrapper">
      <h1 class="welcome">WELCOME!</h1>
      <h1 class="firstTxt">8869 Unique digital collectibles living on the Solana Blockchain</h1>
    </div>
    <div class="bueyBlueDiv">
      <img :src="require('@/assets/Buey_Blue.svg')" class="bueyBlue" />
    </div>
    <div class="utilityDiv">
      <div class="utility">
        <div class="utilitytext">
          <h1 class="titleUtility">UTILITY & ROADMAP</h1>
          <br />
          <p class="pUtility">
            Having an Ox is your way to sign up for the most prestigious Squad ever built. As long
            as you’re part, you’ll have access to everything the squad has to offer.

            <br />
            Access to the Squad means more than bragging about the rights of those scary Oxs who
            seem to have traveled back in time. Our goal is to ensure that usefulness is always
            offered to all our members. This utility will be modest at first, but will expand over
            time as we continue to build.
            <br />
            We’re building the squad not only for you but with you as well. Click below to view our
            roadmap for the near and long-term future.
            <br />
            We hope you have your weapons ready.
          </p>
          <br />
          <br />
          <a href="#roadmap" class="link-to-roadmap">
            <h1 class="roadUtility">ROADMAP</h1>
          </a>
        </div>
        <img :src="require('@/assets/Buey_Golden(1).png')" class="bueyGolden" />
      </div>
    </div>
    <div class="roadDiv" id="roadDiv">
      <h1 class="roadmap" id="roadmap">ROADMAP</h1>
      <div class="roadDiv1">
        <img :src="require('@/assets/Road.svg')" class="road" />
        <div class="percentage">
          <h1 class="titlePercentage">33%</h1>
          <p class="textPercentage">
            $ OXSQ Token: The $ OXSQ token will be created and holders will get airdropped their
            tokens. You will have to have it delisted, holders will be airdropped 20 $ OXSQ weekly.
          </p>
        </div>
        <div class="percentage1">
          <h1 class="titlePercentage">0%</h1>
          <p class="textPercentage">
            Launch all 8,869 algorithmically generated Oxs to our awesome community.
          </p>
        </div>
        <div class="percentage2">
          <h1 class="titlePercentage">66%</h1>
          <p class="textPercentage">
            Ox DAO: Our DAO will be created, only consisting of Ox Squad holders. In the DAO, we
            will offer a multitude of discord bots to assist such as Floor price detector and
            MagicEden listing detector.
          </p>
        </div>
        <div class="percentage3">
          <h1 class="titlePercentage">100%</h1>
          <p class="textPercentage">
            Holders will have access to the Ox Squad exclusive Club and Merch Store where they can
            order their own Hoodie! There will only ever be 8869 Hoodies ever made.
          </p>
        </div>
      </div>
    </div>
    <img :src="require('@/assets/Trait.svg')" class="trait" />
    <img :src="require('@/assets/trait1.svg')" class="trait1" />
    <div class="rarity">
      <div class="textRarity">
        <h1 class="titleRarity">TRAIT RARITY</h1>
        <p class="pRarity">
          We've established a trait rarity system to tell which of our members are likely destinated
          for greatness.
        </p>
      </div>
      <div class="bueyTrait">
        <div class="bueyCommon">
          <div class="bueyCommonM">
            <img :src="require('@/assets/Buey_Common.png')" class="bueyRarity" />
          </div>
          <h1 class="titleBueyRarity">COMMON</h1>
        </div>
        <div class="bueyUncommon">
          <div class="bueyUncommonM">
            <img :src="require('@/assets/Buey_White_png.png')" class="bueyRarity" />
          </div>
          <h1 class="titleBueyRarity">WHITE</h1>
        </div>
        <div class="bueyRare">
          <div class="bueyRareM">
            <div class="bueyRareM">
              <img :src="require('@/assets/Buey_Dorado_png.png')" class="bueyRarity" />
            </div>
          </div>
          <h1 class="titleBueyRarity">GOLDEN</h1>
        </div>
        <div class="bueySuperRare">
          <div class="bueySuperRareM">
            <img :src="require('@/assets/Buey_Zombie.png')" class="bueyRarity" />
          </div>
          <h1 class="titleBueyRarity">ZOMBIE</h1>
        </div>
        <div class="bueyMythic">
          <div class="bueyMythicM">
            <img :src="require('@/assets/Buey_DarkMatter.png')" class="bueyRarity" />
          </div>
          <h1 class="titleBueyRarityDark">DARK MATTER</h1>
        </div>
        <a
          href="https://drive.google.com/file/d/1gvTStMybtsC3g2iik23i1-A6IVokJ_xu/view"
          target="_blank"
        >
          <div class="allTraitsDiv">
            <h1 class="allTraits">VIEW ALL TRAITS</h1>
          </div>
        </a>
        <div class="icons">
          <a href="https://t.co/cDFwrHuUt0" target="_blank">
            <div class="icoDs">
              <img :src="require('@/assets/Ico_Discord.svg')" class="icons1" />
            </div>
          </a>
          <a href="https://twitter.com/TheOxSquadNFT" target="_blank">
            <div class="icoTwitter">
              <img :src="require('@/assets/Ico_Twitter.svg')" class="icons1" />
            </div>
          </a>
          <div class="icoOpenSea">
            <img :src="require('@/assets/Ico_OpenSea.svg')" class="icons1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import Swal from "sweetalert2";
// const foto = require("./assets/Oxscollection (3).pdf");
export default {
  data() {
    return {
      // foto: require("@/assets/Oxscollection.docx"),
    };
  },
  methods: {
    alert() {
      Swal.fire({
        title: "Error!",
        text: "Minting will be available on January the 10th 21UTC",
        icon: "info",
        confirmButtonText: "Ok",
      });
    },
  },
};
</script>

<style>
* {
  margin: 0px;
}
@font-face {
  font-family: "Lazer84";
  src: url("assets/Lazer84.ttf");
}
.mint-wrap {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.mint-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lazer84";
  height: 20px;
  width: 70px;
  font-size: 6px;
  background: rgb(244, 78, 107);
  background: linear-gradient(90deg, rgba(244, 78, 107, 1) 2%, rgba(241, 153, 82, 1) 40%);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-right: 50px;
  padding: 10px;
  border-color: #1b0139;
}
.link-to-roadmap {
  text-decoration: none;
  color: inherit;
}
.wrap {
  width: 100%;
  color: white;
  /* height: 4000px; */
  background: #1b0139;
  display: flex;
  flex-direction: column;
}
.heroBg {
  margin-top: 120px;
  width: 100%;
  height: 160px;
  visibility: hidden;
}
.textWrapper {
  display: flex;
  justify-content: center;
}
.welcome {
  width: 100%;
  font-family: "Lazer84";
  position: absolute;
  top: 75px;
  text-align: center;
  font-size: 30px;
  animation: shakeY;
  animation-iteration-count: infinite;
  animation-duration: 18s;
}
.firstTxt {
  width: 80%;
  font-size: 11px;
  position: absolute;
  top: 125px;
  text-align: center;
}
.bueyBlueDiv {
  display: flex;
  justify-content: center;
}
.bueyBlue {
  width: 140px;
  max-width: 160px;
  position: absolute;
  top: 150px;
}
.utilityDiv {
  display: flex;
  justify-content: center;
}
.utility {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  top: -40px;
  height: 280px;
  width: 76%;
  max-width: 700px;
  background: rgb(117, 66, 169);
  background: linear-gradient(180deg, rgba(117, 66, 169, 1) 23%, rgba(51, 3, 99, 1) 100%);
  border-radius: 15px;
  color: white;
  z-index: 9;
  padding: 15px;
}
.utilitytext {
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 55%;
  max-width: 400px;
  position: absolute;
  left: 10px;
}
.titleUtility {
  font-family: "Lazer84";
  position: relative;
  top: 10px;
  left: 0px;
  font-size: 15px;
}
.pUtility {
  position: relative;
  top: 15px;
  left: 0px;
  font-size: 9px;
  margin-bottom: 10px;
  width: 105%;
  line-height: 1.3;
}
.roadUtility {
  font-family: "Lazer84";
  height: 20px;
  width: 80px;
  text-align: center;
  line-height: 20px;
  margin-top: 15px;
  font-size: 8px;
  background: rgb(244, 78, 107);
  background: linear-gradient(90deg, rgba(244, 78, 107, 1) 2%, rgba(241, 153, 82, 1) 40%);
  border-radius: 5px;
  cursor: pointer;
}
.bueyGolden {
  width: 160px;
  height: 210px;
  position: absolute;
  bottom: -0px;
  right: 0px;
}
.roadDiv {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #1b0139;
  top: -220px;
  height: 2000px;
}
.roadDiv1 {
  display: flex;
  justify-content: left;
  width: 76%;
  height: 600px;
  position: absolute;
  top: 200px;
  max-width: 700px;
}
.roadmap {
  font-size: 12px;
  margin-bottom: 20px;
  position: absolute;
  top: 220px;
  font-family: "Lazer84";
}
.road {
  width: 240px;
  position: absolute;
  top: 80px;
  left: 20px;
}

.percentage {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  height: 85px;
  width: 160px;
  background: #230543;
  border-radius: 10px;
  position: absolute;
  top: 150px;
  left: 5px;
}
.percentage1 {
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 85px;
  width: 160px;
  background: #230543;
  border-radius: 10px;
  position: relative;
  right: -150px;
  top: 40px;
}
.percentage2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  height: 85px;
  width: 160px;
  background: #230543;
  border-radius: 10px;
  position: relative;
  top: 260px;
  right: 5px;
}
.percentage3 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  height: 85px;
  width: 160px;
  background: #230543;
  border-radius: 10px;
  position: absolute;
  top: 375px;
  left: 5px;
}
.titlePercentage {
  font-family: "Lazer84";
  font-size: 15px;
  padding-top: 5px;
  padding-left: 8px;
  margin-bottom: 12px;
}
.textPercentage {
  font-size: 9px;
  padding-left: 8px;
}
.trait {
  position: absolute;
  top: 1095px;
  width: 100%;
}
.trait1 {
  display: none;
}
.rarity {
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  position: absolute;
  top: 1120px;
}
.textRarity {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}
.titleRarity {
  font-family: "Lazer84";
  font-size: 4vw;
}
.pRarity {
  text-align: center;
  font-size: 2vw;
  margin-top: 10px;
}
.bueyTrait {
  display: flex;
  justify-content: center;
  width: 414px;
  height: 200px;
  position: absolute;
  top: 80px;
}
.bueyCommon {
  display: flex;
  justify-content: center;
  height: 90px;
  width: 60px;
  /* background-color: green; */
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  position: absolute;
  left: 30px;
}
.bueyCommonM {
  display: flex;
  justify-content: center;
  height: 60px;
  width: 50px;
  background-color: #a6b4ec;
  position: relative;
  top: 5px;
  border-radius: 15px;
}
.bueyRarity {
  width: 55px;
  position: absolute;
  top: 5px;
  left: -3px;
}
.bueyRarity1 {
  width: 55px;
  position: absolute;
  top: -8px;
  left: -2px;
}
.bueyUncommon {
  display: flex;
  justify-content: center;
  height: 90px;
  width: 60px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  position: absolute;
  left: 100px;
}
.bueyUncommonM {
  display: flex;
  justify-content: center;
  height: 60px;
  width: 50px;
  background-color: #ffb4ff;
  position: relative;
  top: 5px;
  border-radius: 15px;
}
.bueyRare {
  display: flex;
  justify-content: center;
  height: 90px;
  width: 60px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  position: absolute;
  left: 170px;
}
.bueyRareM {
  height: 60px;
  width: 50px;
  background-color: #feddac;
  position: relative;
  top: 5px;
  border-radius: 15px;
}
.bueySuperRare {
  display: flex;
  justify-content: center;
  height: 90px;
  width: 60px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  position: absolute;
  left: 240px;
}
.bueySuperRareM {
  height: 60px;
  width: 50px;
  background-color: #ffabb6;
  position: relative;
  top: 5px;
  border-radius: 15px;
}
.bueyMythic {
  display: flex;
  justify-content: center;
  height: 90px;
  width: 60px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 13px;
  position: absolute;
  left: 310px;
}
.bueyMythicM {
  height: 60px;
  width: 50px;
  background-color: #b1ebf5;
  position: relative;
  top: 5px;
  border-radius: 15px;
}
.titleBueyRarity {
  font-family: "Lazer84";
  font-size: 8px;
  position: absolute;
  top: 73px;
}
.titleBueyRarityDark {
  font-family: "Lazer84";
  font-size: 7px;
  position: absolute;
  top: 73px;
}
.allTraitsDiv {
  display: flex;
  justify-content: center;
  background: rgb(244, 78, 107);
  background: linear-gradient(90deg, rgba(244, 78, 107, 1) 2%, rgba(241, 153, 82, 1) 40%);
  border-radius: 20px;
  height: 20px;
  width: 85px;
  position: absolute;
  top: 110px;
  cursor: pointer;
  text-decoration: none;
}
.allTraits {
  font-family: "Lazer84";
  font-size: 8px;
  position: absolute;
  top: 5px;
  color: white;
}
.company {
  font-size: 5px;
  position: absolute;
  top: 26px;
}
.icons {
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  top: 143px;
}
.icons1 {
  height: 10px;
  width: 10px;
}
.icoDs {
  background-color: #f5fbfc;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 5px;
}
.icoTwitter {
  background-color: #f5fbfc;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 5px;
}
.icoOpenSea {
  background-color: #f5fbfc;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 5px;
}
@media (min-width: 450px) {
  .roadDiv1 {
    display: flex;
    justify-content: center;
  }
  .road {
    width: 260px;
    left: 50px;
  }
  .allTraitsDiv {
    top: 120px;
  }
  .company {
    top: 32px;
  }
  .icons {
    top: 170px;
  }
}
@media (min-width: 515px) {
  .utility {
    padding: 0px;
  }
  .bueyTrait {
    top: 110px;
  }
  .bueyCommon {
    height: 100px;
    width: 70px;
    left: 20px;
  }
  .bueyCommonM {
    height: 70px;
    width: 60px;
  }
  .bueyRarity {
    width: 65px;
  }
  .bueyRarity1 {
    width: 65px;
    top: -11px;
  }
  .bueyUncommon {
    height: 100px;
    width: 70px;
  }
  .bueyUncommonM {
    height: 70px;
    width: 60px;
  }
  .bueyRare {
    height: 100px;
    width: 70px;
    left: 180px;
  }
  .bueyRareM {
    height: 70px;
    width: 60px;
  }
  .bueySuperRare {
    height: 100px;
    width: 70px;
    left: 260px;
  }
  .bueySuperRareM {
    height: 70px;
    width: 60px;
  }
  .bueyMythic {
    height: 100px;
    width: 70px;
    left: 340px;
  }
  .bueyMythicM {
    height: 70px;
    width: 60px;
  }
  .titleBueyRarity {
    font-size: 10px;
    position: absolute;
    top: 80px;
  }
  .titleBueyRarityDark {
    font-family: "Lazer84";
    font-size: 9px;
    position: absolute;
    top: 80px;
  }
  .allTraitsDiv {
    height: 20px;
    width: 90px;
    top: 130px;
  }
  .allTraits {
    font-size: 8px;
  }
  .company {
    font-size: 8px;
    top: 38px;
  }
  .icons {
    height: 100px;
    width: 100px;
    top: 180px;
  }
  .icons1 {
    height: 15px;
    width: 15px;
  }
  .icoDs {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }
  .icoTwitter {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }
  .icoOpenSea {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }
}
@media (min-width: 650px) {
  .roadmap {
    font-size: 20px;
    top: 220px;
  }
  .road {
    width: 400px;
    left: 20px;
    top: 120px;
  }
  .percentage {
    height: 130px;
    width: 240px;
    position: absolute;
    top: 230px;
    left: 5px;
  }
  .percentage1 {
    height: 130px;
    width: 240px;
    background: #230543;
    border-radius: 10px;
    position: relative;
    right: -240px;
    top: 80px;
  }
  .percentage2 {
    height: 130px;
    width: 240px;
    position: relative;
    top: 390px;
    right: 5px;
  }
  .percentage3 {
    height: 130px;
    width: 240px;
    position: absolute;
    top: 540px;
    left: 5px;
  }
  .titlePercentage {
    font-size: 28px;
  }
  .textPercentage {
    font-size: 13px;
  }
  .trait {
    top: 1240px;
  }
  .rarity {
    top: 1310px;
  }
  .textRarity {
    width: 300px;
  }
  .titleRarity {
    font-size: 3.2vw;
  }
  .pRarity {
    font-size: 1.8vw;
  }
  .allTraitsDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 120px;
    top: 150px;
  }
  .allTraits {
    font-size: 10px;
    top: 7px;
  }
  .company {
    font-size: 9px;
    top: 52px;
  }
  .icons {
    height: 100px;
    width: 150px;
    top: 210px;
  }
  .icons1 {
    height: 18px;
    width: 18px;
  }
  .icoDs {
    height: 35px;
    width: 35px;
    border-radius: 20px;
  }
  .icoTwitter {
    height: 35px;
    width: 35px;
    border-radius: 20px;
  }
  .icoOpenSea {
    height: 35px;
    width: 35px;
    border-radius: 20px;
  }
}
@media (min-width: 820px) {
  .bueyMythic {
    border-radius: 25px;
  }
  .mint-button {
    width: 100px;
    height: 30px;
    margin-right: 150px;
  }
  .roadUtility {
    margin-top: 30px;
  }
  .road {
    width: 425px;
    left: 50px;
  }

  .rarity {
    top: 1250px;
  }
  .textRarity {
    width: 45%;
  }
  .titleRarity {
    font-size: 2.8vw;
  }
  .pRarity {
    font-size: 1.5vw;
  }
  .bueyTrait {
    top: 110px;
  }
  .bueyCommon {
    height: 190px;
    width: 130px;
    left: -150px;
  }
  .bueyCommonM {
    height: 130px;
    width: 110px;
    top: 5px;
  }
  .bueyRarity {
    width: 125px;
    left: -7px;
  }
  .bueyRarity1 {
    width: 125px;
    top: -25px;
    left: -7px;
  }
  .bueyUncommon {
    height: 190px;
    width: 130px;
    left: 0px;
  }
  .bueyUncommonM {
    height: 130px;
    width: 110px;
  }
  .bueyRare {
    height: 190px;
    width: 130px;
    left: 150px;
  }
  .bueyRareM {
    height: 130px;
    width: 110px;
  }
  .bueySuperRare {
    height: 190px;
    width: 130px;
    left: 300px;
  }
  .bueySuperRareM {
    height: 130px;
    width: 110px;
  }
  .bueyMythic {
    height: 190px;
    width: 130px;
    left: 450px;
  }
  .bueyMythicM {
    height: 130px;
    width: 110px;
  }
  .titleBueyRarity {
    font-size: 18px;
    position: absolute;
    top: 150px;
  }
  .titleBueyRarityDark {
    font-family: "Lazer84";
    font-size: 16px;
    position: absolute;
    top: 150px;
  }
  .allTraitsDiv {
    top: 230px;
  }

  .icons {
    top: 280px;
  }
}
@media (min-width: 1024px) {
  .welcome {
    position: absolute;
    top: 90px;
    text-align: center;
    font-size: 50px;
  }
  .firstTxt {
    width: 70%;
    font-size: 18px;
    position: absolute;
    top: 165px;
    text-align: center;
  }
  .heroBg {
    margin-top: 180px;
    width: 100%;
    height: 170px;
  }
  .bueyBlue {
    width: 180px;
    max-width: 200px;
    position: absolute;
    top: 190px;
  }
  .utility {
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: relative;
    top: -40px;
    height: 270px;
    width: 65%;
    max-width: 800px;
    padding: 35px;
  }
  .utilitytext {
    display: flex;
    flex-direction: column;
    width: 55%;
    max-width: 10000px;
    position: absolute;
    left: 10px;
    padding: 20px;
  }
  .titleUtility {
    position: relative;
    top: 10px;
    left: 0px;
    font-size: 18px;
  }
  .pUtility {
    position: relative;
    top: 15px;
    left: 0px;
    font-size: 14px;
    margin-bottom: 10px;
    width: 105%;
  }
  .roadUtility {
    height: 25px;
    width: 110px;
    line-height: 25px;
    top: 230px;
    left: 0px;
    font-size: 10px;
    border-radius: 5px;
    margin-top: 10px;
    margin-top: 20px;
  }
  .bueyGolden {
    width: 250px;
    height: 280px;
    position: absolute;
    bottom: -0px;
    right: 0px;
  }
  .roadDiv {
    top: -270px;
    height: 1500px;
  }
  .roadDiv1 {
    display: flex;
    justify-content: center;
    width: 76%;
    height: 600px;
    position: absolute;
    top: 270px;
    max-width: 700px;
  }
  .roadmap {
    top: 290px;
  }
  .road {
    left: 80px;
    top: 120px;
  }
  .percentage {
    left: 55px;
  }
  .percentage1 {
    right: -300px;
    top: 80px;
  }
  .percentage2 {
    top: 390px;
    right: -55px;
  }
  .percentage3 {
    left: 55px;
  }
  .trait {
    top: 1455px;
  }
  .rarity {
    top: 1520px;
  }
  .titleRarity {
    font-size: 2.8vw;
  }
  .pRarity {
    font-size: 1.5vw;
  }
  .allTraitsDiv {
    height: 45px;
    width: 180px;
    top: 250px;
  }
  .bueyTrait {
    top: 140px;
  }
  .allTraits {
    font-size: 19px;
    top: 11px;
  }
  .company {
    font-size: 14px;
    top: 108px;
  }
  .icons {
    height: 150px;
    width: 200px;
    top: 350px;
  }
  .icons1 {
    height: 20px;
    width: 20px;
  }
  .icoDs {
    height: 40px;
    width: 40px;
    margin-left: 15px;
  }
  .icoTwitter {
    height: 40px;
    width: 40px;
    margin-left: 15px;
  }
  .icoOpenSea {
    height: 40px;
    width: 40px;
    margin-left: 15px;
  }
}
@media (min-width: 1200px) {
  .mint-button {
    width: 150px;
    height: 40px;
    margin-right: 230px;
  }
  .bueyTrait {
    top: 180px;
  }
  .bueyCommon {
    height: 260px;
    width: 180px;
    left: -280px;
  }
  .bueyCommonM {
    height: 180px;
    width: 155px;
    top: 10px;
  }
  .bueyRarity {
    width: 175px;
    left: -7px;
  }
  .bueyRarity1 {
    width: 175px;
    top: -37px;
    left: -7px;
  }
  .bueyUncommon {
    height: 260px;
    width: 180px;
    left: -80px;
  }
  .bueyUncommonM {
    height: 180px;
    width: 155px;
    top: 10px;
  }
  .bueyRare {
    height: 260px;
    width: 180px;
    left: 120px;
  }
  .bueyRareM {
    height: 180px;
    width: 155px;
    top: 10px;
  }
  .bueySuperRare {
    height: 260px;
    width: 180px;
    left: 320px;
  }
  .bueySuperRareM {
    height: 180px;
    width: 155px;
    top: 10px;
  }
  .bueyMythic {
    height: 260px;
    width: 180px;
    left: 520px;
  }
  .bueyMythicM {
    height: 180px;
    width: 155px;
    top: 10px;
  }
  .titleBueyRarity {
    font-size: 25px;
    position: absolute;
    top: 210px;
  }
  .titleBueyRarityDark {
    font-family: "Lazer84";
    font-size: 22px;
    position: absolute;
    top: 210px;
  }
  .allTraitsDiv {
    top: 300px;
  }
  .company {
    top: 95px;
  }
  .icons {
    top: 450px;
  }
}
@media (min-width: 1440px) {
  .mint-button {
    width: 170px;
    height: 45px;
    margin-right: 300px;
    font-size: 10px;
  }
  .welcome {
    position: absolute;
    top: 100px;
    text-align: center;
    font-size: 50px;
  }
  .firstTxt {
    width: 60%;
    font-size: 20px;
    position: absolute;
    top: 170px;
    text-align: center;
  }
  .heroBg {
    margin-top: 240px;
    width: 100%;
    max-height: 40%;
  }
  .bueyBlue {
    width: 225px;
    max-width: 225px;
    position: absolute;
    top: 220px;
  }
  .utility {
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: relative;
    top: -40px;
    height: 280px;
    width: 65%;
    max-width: 800px;
  }
  .utilitytext {
    display: flex;
    flex-direction: column;
    width: 55%;
    max-width: 10000px;
    position: absolute;
    left: 10px;
  }
  .titleUtility {
    position: relative;
    top: 10px;
    left: 0px;
    font-size: 18px;
  }
  .pUtility {
    position: relative;
    top: 15px;
    left: 0px;
    font-size: 13px;
    margin-bottom: 10px;
    width: 105%;
    line-height: 1.5;
  }
  .roadUtility {
    height: 30px;
    width: 130px;
    line-height: 30px;
    top: 235px;
    font-size: 12px;
  }
  .bueyGolden {
    width: 250px;
    height: 280px;
    position: absolute;
    bottom: -0px;
    right: 0px;
  }
  .roadDiv {
    top: -280px;
    height: 1500px;
  }
  .roadmap {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .road {
    width: 500px;
    left: 40px;
    top: 140px;
  }
  .percentage {
    height: 170px;
    width: 320px;
    position: absolute;
    top: 285px;
    left: 5px;
  }
  .percentage1 {
    height: 170px;
    width: 320px;
    background: #230543;
    border-radius: 10px;
    position: relative;
    right: -340px;
    top: 90px;
  }
  .percentage2 {
    height: 170px;
    width: 320px;
    position: relative;
    top: 480px;
    right: 5px;
  }
  .percentage3 {
    height: 170px;
    width: 320px;
    position: absolute;
    top: 680px;
    left: 5px;
  }
  .titlePercentage {
    font-size: 40px;
    position: relative;
    left: 8px;
  }
  .textPercentage {
    font-size: 17px;
    position: relative;
    left: 8px;
  }
  .trait {
    display: none;
  }
  .trait1 {
    display: flex;
    position: absolute;
    top: 1620px;
    width: 100%;
  }
  .rarity {
    top: 1700px;
  }
  .titleRarity {
    font-size: 2.8vw;
  }
  .pRarity {
    font-size: 1.5vw;
  }
  .allTraitsDiv {
    top: 320px;
  }
  .company {
    top: 73px;
  }
  .icons {
    top: 410px;
  }
}
@media (min-width: 1920px) {
  .mint-button {
    width: 170px;
    height: 45px;
    margin-right: 300px;
    font-size: 10px;
    position: relative;
    top: 30px;
  }
  .welcome {
    position: absolute;
    top: 120px;
    text-align: center;
    font-size: 70px;
  }
  .firstTxt {
    width: 60%;
    font-size: 25px;
    position: absolute;
    top: 220px;
    text-align: center;
  }
  .heroBg {
    margin-top: 330px;
    width: 100%;
    max-height: 1000000px;
  }
  .bueyBlue {
    width: 270px;
    max-width: 270px;
    position: absolute;
    top: 290px;
  }
  .utility {
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: relative;
    top: -40px;
    height: 450px;
    width: 65%;
    max-width: 800px;
  }
  .utilitytext {
    display: flex;
    flex-direction: column;
    width: 55%;
    max-width: 10000px;
    position: absolute;
    left: 10px;
  }
  .titleUtility {
    position: relative;
    top: 10px;
    left: 0px;
    font-size: 30px;
  }
  .pUtility {
    position: relative;
    top: 15px;
    left: 0px;
    font-size: 18px;
    margin-bottom: 10px;
    width: 105%;
    line-height: 1.6;
  }
  .roadUtility {
    height: 40px;
    width: 170px;
    line-height: 40px;
    top: 390px;
    font-size: 14px;
  }
  .bueyGolden {
    width: 350px;
    height: 400px;
    position: absolute;
    bottom: -0px;
    right: 0px;
  }
  .roadDiv {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -450px;
    height: 1500px;
  }
  .roadDiv1 {
    display: flex;
    justify-content: left;
    width: 76%;
    height: 600px;
    position: absolute;
    top: 470px;
    max-width: 700px;
  }
  .roadmap {
    font-size: 40px;
    margin-bottom: 20px;
    position: relative;
    top: 460px;
  }
  .trait {
    display: none;
  }
  .trait1 {
    display: flex;
    position: absolute;
    top: 2000px;
    width: 100%;
  }
  .rarity {
    top: 2100px;
  }
  .titleRarity {
    font-size: 2.8vw;
  }
  .pRarity {
    font-size: 1.5vw;
  }
  .bueyTrait {
    top: 240px;
  }
  .bueyCommon {
    height: 360px;
    width: 260px;
    left: -550px;
  }
  .bueyCommonM {
    height: 260px;
    width: 230px;
    top: 10px;
  }
  .bueyRarity {
    width: 255px;
    left: -12px;
  }
  .bueyRarity1 {
    width: 255px;
    top: -55px;
    left: -12px;
  }
  .bueyUncommon {
    height: 360px;
    width: 260px;
    left: -250px;
  }
  .bueyUncommonM {
    height: 260px;
    width: 230px;
    top: 10px;
  }
  .bueyRare {
    height: 360px;
    width: 260px;
    left: 50px;
  }
  .bueyRareM {
    height: 260px;
    width: 230px;
    top: 10px;
  }
  .bueySuperRare {
    height: 360px;
    width: 260px;
    left: 350px;
  }
  .bueySuperRareM {
    height: 260px;
    width: 230px;
    top: 10px;
  }
  .bueyMythic {
    height: 360px;
    width: 260px;
    left: 650px;
  }
  .bueyMythicM {
    height: 260px;
    width: 230px;
    top: 10px;
  }
  .titleBueyRarity {
    font-size: 35px;
    position: absolute;
    top: 290px;
  }
  .titleBueyRarityDark {
    font-family: "Lazer84";
    font-size: 30px;
    position: absolute;
    top: 290px;
  }
  .allTraitsDiv {
    height: 70px;
    width: 290px;
    top: 440px;
  }
  .allTraits {
    position: initial;
    font-size: 24px;
    top: 16px;
  }
  .company {
    font-size: 22px;
    top: 95px;
  }
  .icons {
    height: 300px;
    width: 300px;
    top: 570px;
  }
  .icons1 {
    height: 35px;
    width: 35px;
  }
  .icoDs {
    height: 60px;
    width: 60px;
    border-radius: 35px;
    margin-left: 15px;
  }
  .icoTwitter {
    height: 60px;
    width: 60px;
    border-radius: 35px;
    margin-left: 15px;
  }
  .icoOpenSea {
    height: 60px;
    width: 60px;
    border-radius: 35px;
    margin-left: 15px;
  }
}
</style>
