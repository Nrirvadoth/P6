function Tags({ accId, tags }) {
  return (
    <ul className="tagsList">
      {tags.map((tag) => (
        <li className="tags" key={`${accId}-${tag}`}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
