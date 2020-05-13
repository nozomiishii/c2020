const newSkill = "Passport.js JWT OAuth2.0 ";

const oldSkills =
  "Babel CSS Contentful ESLint Enzyme Express Firebase Gatsby.js GitHub GraphQL HTML Heroku Homebrew JavaScript Jest MangoDB Material-UI Node.js React SCSS TypeScript VSCode ml5.js npm p5.js webpack4 yarn";

const skills = newSkill + oldSkills;
console.log(skills);
const sorter = (strSkills) => {
  const arrSKills = strSkills.split(" ");
  console.log(arrSKills);
  // return arrSKills.sort((a, b) => b - a).join("<br/>");
  return arrSKills.sort().join(", ");
};

console.log(sorter(skills));

const cv = document.getElementById("cv");

cv.innerHTML = sorter(skills);
