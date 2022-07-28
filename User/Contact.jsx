import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tabs, Tab } from 'Tab'
import { List, app, get, post } from 'List'
import { PageForm, Text, Phone } from 'Form'

const tabs = <>
    <Tab
        title="Info"
        icon={InfoIcon}
        panel={<PageForm
            entityType='Profile'
            inputs={<>
                <Text
                    column='FirstName'
                    placeholder='First name'
                />
            </>}
        />}
    />
    <Tab
        title="Phones"
        icon={LocalPhoneIcon}
        panel={<List
            entityType="Phone"
            headers={<>
                <th>Phone number</th>
                <th>Country</th>
            </>}
            row={(item) => <>
                <th>{item.number}</th>
                <th>{item.country}</th>
            </>}
            create={<PageForm
                entityType="Phone"
                inputs={<>
                    <Phone
                        column="PhoneValue"
                        placeholder="Number"
                        required="You have not provided the phone number"
                    />
                </>}
            />}
        />}
    />
    <Tab
        title="Addresses"
        icon={LocationOnIcon}
        panel={<div>Addresses</div>}
    />
</>

const Contact = () => {
    return <Tabs
        title="Contact information"
        tabs={tabs}
    />
}

export default Contact