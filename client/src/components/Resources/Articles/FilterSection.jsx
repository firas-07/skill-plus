import React from "react";

function FilterSection() {
    const subjects = [
        { name: "Java", count: 20 },
        { name: ".NET", count: 15 },
        { name: "Data Engineering", count: 30 }
    ];

    const companies = [
        { name: "Accenture", count: 12 },
        { name: "Infosys", count: 23 },
        { name: "Wipro", count: 32 },
        { name: "Cognizant", count: 14 }
    ];

    return (
        <aside className="md:flex md:flex-col hidden md:items-start self-start mt-6 text-xl font-semibold text-stone-100">
            <h2 className="text-2xl font-bold">FILTERS</h2>
            <div className="mt-4">Subjects</div>
            {subjects.map((subject, index) => (
                <div key={index} className="flex gap-1.5 mt-3 whitespace-nowrap">
                    <input type="checkbox" />
                    <div>{subject.name}</div>
                    <div>({subject.count})</div>
                </div>
            ))}
            <div className="mt-14 max-md:mt-10">Company</div>
            {companies.map((company, index) => (
                <div key={index} className="flex gap-2.5 mt-3">
                     <input type="checkbox" />
                    <div className="basis-auto">{company.name} ({company.count})</div>
                </div>
            ))}
        </aside>
    );
}

export default FilterSection;