import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import roundGrain from "@iconify/icons-ic/round-grain";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Figuras",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: "/figuras",
  },
  {
    title: "Peluches",
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: "/peluches",
  },
  {
    title: "Accesorios",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: "/accesorios",
  },
  {
    title: "Acrilicos",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: "/acrilicos",
  },
  {
    title: "Lampara",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: "/lampara",
  },
];

export default menuConfig;
