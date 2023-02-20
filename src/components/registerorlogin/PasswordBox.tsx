import { ChangeEvent, useState } from "react";
import { BsX, BsCheck, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { PasswordInput, Progress, Text, Popover, Box } from "@mantine/core";

export const PassWordBox = ({ childToParent }: any) => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    childToParent(value);
  };

  return (
    <div style={{ maxWidth: 340, margin: "auto" }}>
      <Popover
        opened={popoverOpened}
        position="top"
        width="target"
        transition="pop"
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              withAsterisk
              label="Your password"
              placeholder="Your password"
              value={value}
              onChange={(event) => handleUpdate(event)}
              onBlur={(event) => handleUpdate(event)}
              visibilityToggleIcon={({ reveal }) =>
                reveal ? <BsEyeSlashFill /> : <BsEyeFill />
              }
              style={{ marginTop: "10px" }}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress
            color={color}
            value={strength}
            size={2}
            style={{ marginBottom: 10 }}
          />
          <PasswordRequirement
            label="Includes at least 3 characters"
            meets={value.length > 2}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <BsCheck /> : <BsX />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
];

function getStrength(password: string) {
  let multiplier = password.length > 2 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}
