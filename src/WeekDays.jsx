const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function WeekDays() {
  return (
    <div>
      <ul>
        Week Days
        {weekDays.map((day) => (
          <li>{day}</li>
        ))}
      </ul>
    </div>
  );
}
