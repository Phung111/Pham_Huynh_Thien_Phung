export default function SubMenuDrop({ subMenuDrop }) {
  return (
    <a
      href={subMenuDrop.href}
      className="flex items-center justify-center py-1 hover:bg-gray-500"
      key={subMenuDrop.id}
      target="_blank"
    >
      <p className="capitalize">{subMenuDrop.title}</p>
    </a>
  );
}
