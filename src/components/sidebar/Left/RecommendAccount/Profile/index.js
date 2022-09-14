import { memo } from "react";
import {
  Avatar,
  Button,
  Divider,
  Group,
  NavLink,
  Popover,
  Stack,
  Text,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { IconCircleCheck } from "@tabler/icons";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
function ProfileComponent({ name, description, avatar, id, isTicked }) {
  const location = useLocation();
  const [isOpen, { close, open }] = useDisclosure();
  return (
    <div
      className={"fullwidth"}
      onMouseMove={(e) => {if(!isOpen){open();}}}
      onMouseLeave={(e) => {if(isOpen){close();}}}
    >
      <Popover withArrow shadow={"md"} width="target" opened={isOpen}>
        <Popover.Target>
          <NavLink
            component={Link}
            to={id}
            label={<Text lineClamp={1}>{name}</Text>}
            rightSection={
              <IconCircleCheck
                className={clsx({ hidden: !isTicked })}
                size={"0.9em"}
                color="blue"
              />
            }
            description={description}
            icon={<Avatar src={avatar} />}
            variant="subtle"
            color="red"
            active={location.pathname === id}
            style={{ fontWeight: "bold" }}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <Stack>
            <Group position="apart">
              <Avatar src={avatar} />
              <Button color={"red"}>Theo dõi</Button>
            </Group>
            <Divider />
            <NavLink
              component={Link}
              to={id}
              label={name}
              description={description}
              rightSection={
                <IconCircleCheck
                  className={clsx({ hidden: !isTicked })}
                  size={"0.9em"}
                  color="blue"
                />
              }
              variant="subtle"
              style={{ fontWeight: "bold" }}
            />
            <Divider />
            <Group noWrap={false}>
              <Text lineClamp={1}>
                <b>2.6M</b> Lượt theo dõi
              </Text>
              <Text lineClamp={1}>
                <b>2.6M</b> Thích
              </Text>
            </Group>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}
export default memo(ProfileComponent);
