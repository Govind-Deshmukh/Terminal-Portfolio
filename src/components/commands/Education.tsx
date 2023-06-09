import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here are my educational qualifications!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science & Engineering",
    desc: "Dr.Babasaheb Ambedkar Technological University, Lonere | 2019 ~ 2023",
  },
  {
    title: "SENIOR SECONDARY SCHOOL (HSC)",
    desc: "Ashok Vidyalaya, Pune | 2018 ~ 2019",
  },
];

export default Education;
