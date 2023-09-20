export default function SubMenuDrop({ subMenuDrop }) {
  return (
    <a
      href={subMenuDrop.href}
      className="flex items-center py-1 hover:bg-gray-500"
      key={subMenuDrop.id}
      target="_blank"
      rel="noreferrer"
    >
      <p className="px-2 capitalize">{subMenuDrop.title}</p>
    </a>
  );
}
