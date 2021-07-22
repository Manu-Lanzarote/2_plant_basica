import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink } from './DropdownCss';

import { menuData } from '../navbar/menuData';


const Dropdown = ({isOpen, toggle}) => {
    return (
                <DropdownContainer isOpen={isOpen} onClick={toggle}>
                    <Icon onClick={toggle}>
                        <CloseIcon/>
                    </Icon>
                        <DropdownWrapper>
                            <h1>NEW COLONY CLUB</h1>
                            <DropdownMenu>
                                {menuData.map((item, index) => (
                                    <DropdownLink to={item.link} key={index}>
                                        {item.title}
                                    </DropdownLink>
                                ))}
                            </DropdownMenu>
                        </DropdownWrapper>
                </DropdownContainer>
    )
}

export default Dropdown;
