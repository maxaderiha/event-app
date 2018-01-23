export function entitiesFromFB(data) {
    Object.entries(data).forEach(([key, value]) => value.uid = key);
    return data;
}

export function getSections(obj) {
    const sections = [];
    const groups = {};

    Object.entries(obj).forEach(([uid, values]) => {
        if (values.title[0] in groups) {
            groups[values.title[0]].push({ uid, ...values });
        } else {
            groups[values.title[0]] = [{ uid, ...values }];
        }
    });

    Object.entries(groups).map(([key, data]) => {
        sections.push({ title: `${key}, ${data.length}`, data });
    });

    return sections;
}