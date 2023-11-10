function Tags({ accId, tags }) {
  return (
    <ul className="tags-list">
      {tags.map((tag) => (
        <li className="tags" key={`${accId}-${tag}`}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
