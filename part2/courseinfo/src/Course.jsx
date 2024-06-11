const Header = ({ name }) => <h1>{name}</h1>;
const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </>
    );
};

const Course = ({ course }) => {
    return (
        <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};
export default Course;
