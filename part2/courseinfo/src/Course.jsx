const Header = ({ name }) => <h1>{name}</h1>;
const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => {
    const total = parts.reduce((total, part) => {
        return (total += part.exercises);
    }, 0);
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
            <p>
                <strong>total of {total} exercises</strong>
            </p>
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
