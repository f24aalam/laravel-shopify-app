import React from 'react';
import Shopified from "../Layouts/Shopified";
import {Page, Card, Button} from '@shopify/polaris';
import { Inertia } from '@inertiajs/inertia';

const Welcome = ({ user }) => {

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/')
    }

    return (
        <>
            <Page title="Inertia App">
                <Card title={ user.name } sectioned>
                    <Button
                        primary
                        onClick={handleSubmit}
                    >
                        Click Me
                    </Button>
                </Card>
            </Page>
        </>
    );
}

Welcome.layout = page => <Shopified children={page} title="Welcome" />
export default Welcome;
