import ScheduleCard from "./ScheduleCard";

function ScheduleList({ schedules }) {

    return (

        <div className="schedule-list">

            {schedules.map((schedule, index) => (

                <ScheduleCard
                    key={index}
                    number={index + 1}
                    schedule={schedule}
                />

            ))}

        </div>

    );

}

export default ScheduleList;