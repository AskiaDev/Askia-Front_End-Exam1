const AccordionContent = ({ isOpen, email }) => {
  const parsedDate = new Date(email.date);
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = parsedDate.toLocaleString("default", { month: "short" });
  const year = parsedDate.getFullYear(email.date);
  const formattedDate = `${month} ${day}, ${year}`;

  const dayOfWeekNumber = parsedDate.getDay();
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeekName = dayOfWeek[dayOfWeekNumber];

  const tags = email.tags.split(", ");

  return (
    <>
      {isOpen && (
        <div className="grid my-5 pt-6 grid-cols-2 justify-between border-t">
          <div className="mb-2 flex flex-col">
            <h1>
              <strong>{email.sender_name}</strong>
            </h1>
            <p className="text-gray-400">
              {formattedDate} <span>03:41 PM</span>
            </p>
          </div>
          <div className="col-end-4 flex items-center gap-2">
            {tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="rounded-md border border-cyan-400 bg-cyan-50 p-1 text-cyan-500"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="col-span-3">
            <div className="flex flex-col mt-4">
              <p>----Fowarded message----</p>
              <p>
                From: <strong>{email.sender_name}</strong>
                &lt;
                <span className="text-blue-500">{email.sender_email}</span>&gt;
              </p>
              <p>
                Date: {dayOfWeekName}, {formattedDate} at 4:36 PM
              </p>
              <p>Subject: {email.subject}</p>
              <p>
                To: Isable Bowen &lt;
                <span className="text-blue-500">isabel.com</span>&gt;
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccordionContent;
