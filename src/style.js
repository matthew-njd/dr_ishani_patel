const styles = {
  boxWidth: "xl:max-w-[1080px] w-full",

  button: "py-4 px-6 font-regular font-medium text-[18px] rounded-[5px]",

  heading2:
    "font-regular font-semibold underline xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]",
  heading4:
    "font-regluar font-semibold text-white text-[28px] leading-[23px] xs:leading-[76.8px]",
  paragraph: "font-regular font-normal text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  textInput: "font-regular font-normal text-[18px] p-1 w-full rounded",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
