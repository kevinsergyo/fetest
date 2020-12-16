function solution(record) {
    var answer = [];
    var person = [];

    record.forEach(rec => {
        const data = rec.split(' ');

        switch (data[0]) {
            case "Enter":
                if (!person.find(p => p[0] == data[1]))
                    person.push([data[1], data[2]]);
                else if (person.find(p => p[0] == data[1] && p[1] != data[2]))
                    person[person.findIndex(p => p[0] == data[1])]=[data[1],data[2]]
                break;
            case "Change":
                person[person.findIndex(p => p[0] == data[1])]=[data[1],data[2]]
                break;
        }
    });

    record.forEach(rec => {
        const data = rec.split(' ');

        switch (data[0]) {
            case "Enter":
                answer.push(person[person.findIndex(p => p[0] == data[1])][1] + " came in.");
                break;
            case "Leave":
                answer.push(person[person.findIndex(p => p[0] == data[1])][1] + " has left.");
                break;
        }
    });

    return answer;
}