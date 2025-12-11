const ArrayOfObjectProcess = () => {
 
    const profileMaking = [
    {
      profileImage: "./1.jpg",

      personalDetails: {
        name: "SRIKANTH T.K",
        age: 21,
        gender: "Male",
        dob: "09-06-2004",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
      },

      education: {
        degree: "B.Sc Computer Science",
        institute: "SLA",
      },

      professionalDetails: {
        role: "Web Developer",
        company: "Zoho",
      },

      frontEnd: ["HTML", "CSS", "JavaScript", "Tailwind", "SQL"],
      backEnd: "React",
    },
  ];

  return (
    <>
      {profileMaking.map((e, i) => (
        <div key={i} className="bg-blue-300 min-h-screen py-10 px-4">
          <main className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        
            <header className="flex items-center gap-6">
              <img
                src={e.profileImage}
                alt="profile-image"
                className="h-28 w-28 rounded-full ring-4 ring-blue-500 object-cover"
              />

              <div>
                <h1 className="text-3xl font-bold">{e.personalDetails.name}</h1>
                <p className="text-red-700 text-sm mt-1">
                  MERN Full Stack Developer
                </p>

                <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
                  <span>Age: {e.personalDetails.age}</span>
                  <span>DOB: {e.personalDetails.dob}</span>
                  <span>
                    Location: {e.personalDetails.city},{" "}
                    {e.personalDetails.state}, {e.personalDetails.country}
                  </span>
                </div>
              </div>
            </header>


            <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
             
              <aside className="space-y-4 md:col-span-1">
               
                <div className="p-4 bg-indigo-100 rounded-lg">
                  <h2 className="font-semibold text-red-700 text-sm">
                    Personal Details
                  </h2>
                  <ul className="mt-3 text-sm text-gray-700 space-y-1">
                    <li>
                      <strong>Name: </strong>
                      {e.personalDetails.name}
                    </li>
                    <li>
                      <strong>Age: </strong>
                      {e.personalDetails.age}
                    </li>
                    <li>
                      <strong>Gender: </strong>
                      {e.personalDetails.gender}
                    </li>
                    <li>
                      <strong>DOB: </strong>
                      {e.personalDetails.dob}
                    </li>
                    <li>
                      <strong>City: </strong>
                      {e.personalDetails.city}
                    </li>
                    <li>
                      <strong>State: </strong>
                      {e.personalDetails.state}
                    </li>
                    <li>
                      <strong>Country: </strong>
                      {e.personalDetails.country}
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <h2 className="font-semibold text-sm">Education</h2>
                  <p className="text-sm mt-2">
                    <strong>Degree: </strong> {e.education.degree}
                  </p>
                  <p className="text-sm">
                    <strong>Institute: </strong> {e.education.institute}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <h2 className="font-semibold text-sm">Professional Details</h2>
                  <p className="text-sm mt-2">
                    <strong>Role: </strong> {e.professionalDetails.role}
                  </p>
                  <p className="text-sm">
                    <strong>Company: </strong> {e.professionalDetails.company}
                  </p>
                </div>
              </aside>

              
              <div className="md:col-span-2 space-y-6">
                
                <section className="p-4 border rounded-lg">
                  <h2 className="text-lg font-semibold">Summary</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    MERN Full Stack Developer skilled in building end-to-end web
                    applications using MongoDB, Express.js, React.js, and
                    Node.js. Experienced in creating modern UIs, scalable APIs,
                    and deploying production-ready applications.
                  </p>
                </section>
                <section className="p-4 border rounded-lg">
                  <h2 className="text-lg font-semibold">Skills</h2>
                  <p className="mt-3 text-sm">
                    <strong>Frontend: </strong>
                    {e.frontEnd.join(", ")}
                  </p>
                  <p className="mt-1 text-sm">
                    <strong>Backend: </strong>
                    {e.backEnd}
                  </p>
                </section>
                <section className="p-4 border rounded-lg">
                  <h2 className="text-lg font-semibold">Projects</h2>
                  <ul className="mt-2 text-sm text-gray-700 space-y-1">
                    <li> Form Validation App  </li>
                    <li> Personal Portfolio Website </li>
                  </ul>
                </section>
              </div>
            </section>
          </main>
        </div>
      ))}
    </>
  );
};

export default ArrayOfObjectProcess;
