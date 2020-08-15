function parseProjects(data) {
  const projects = data.map((d) => ({
    id: d.id,
    name: d.name,
    description: d.description,
    url: d.html_url,
    updated_at: new Date(d.updated_at).toLocaleString(),
  }));
  return projects;
}

export { parseProjects };
