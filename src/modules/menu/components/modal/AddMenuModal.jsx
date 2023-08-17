import { ModalWindow } from "src/shared/ui/ModalWindow";
import { useMenuStore } from "src/modules/menu/store/index.js";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useAddMenu } from "src/modules/menu/hooks/index.js";

export const AddMenuModal = () => {
  const isOpen = useMenuStore((s) => s.addModalOpen);
  const close = useMenuStore((s) => s.setAddModalOpen);

  const [menu, setMenu] = useState({
    title: "",
    startTime: "",
    endTime: "",
  });

  const { mutate: addMenu } = useAddMenu();

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <ModalWindow isOpen={isOpen}>
      <TextField
        id="menu_title"
        label="Название"
        variant="standard"
        value={menu.title}
        onChange={(e) => setMenu({ ...menu, title: e.target.value })}
      />
      <MobileTimePicker
        value={menu.startTime}
        onChange={(e) =>
          setMenu({ ...menu, startTime: dayjs(e).format("HH:mm") })
        }
      />
      <MobileTimePicker
        value={menu.endTime}
        onChange={(e) =>
          setMenu({ ...menu, endTime: dayjs(e).format("HH:mm") })
        }
      />
      <Button onClick={handleAddMenu}>Add</Button>
      <Button onClick={close}>Close</Button>
    </ModalWindow>
  );
};
