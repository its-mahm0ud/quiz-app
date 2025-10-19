import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Avatar,
} from "@heroui/react";


export default function NavbarComponent() {
  return (
    <Navbar className="bg-inherit">
      <NavbarBrand>
        <h2 className="font-bold  text-textMainColor">Now is Quiz</h2>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
           <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
      </NavbarContent>
    </Navbar>
  );
}
