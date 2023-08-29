import Button from "./Button.jsx";

export default function Tags() {
  const tags = ["Parmentier", "Marais", "Parc", "Night Life"];

  return (
    <div>
      {tags.map((tag, index) => (
        <Button key={index} tag={tag} />
      ))}
    </div>
  );
}
