import ScheduleCard from "./ScheduleCard";

function ScheduleList({ schedules }){

    return(

        <div className="schedule-list">

            {

                schedules.map((schedule,index)=>(

                    <ScheduleCard
                        key={index}
                        schedule={schedule}
                        number={index+1}
                    />

                ))

            }

        </div>

    );

}

export default ScheduleList;