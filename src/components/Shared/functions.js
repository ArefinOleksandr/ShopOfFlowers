import { useState, useEffect } from 'react';
const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Пороговое значение для определения мобильных устройств
    };

    // Вызываем функцию проверки при загрузке компонента и при изменении размеров окна
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Очищаем слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
};

 export const validationPhone = (number) => {
  

  const phoneRegex = /^\+380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;

  return phoneRegex.test(number)
}




export default useMobileCheck;