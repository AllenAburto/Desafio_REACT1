import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Boton = ({ colorButton, textButton }) => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge className='w-100' pill bg={colorButton}>
          {textButton}
        </Badge>
      </Stack>
    </>
  );
};

export default Boton;
