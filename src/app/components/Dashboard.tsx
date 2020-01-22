import * as React from 'react';

export const Dashboard = () => {
    return <div>
        <table id="dashBoard" border="1rem solid">
            <tr>
                <td>
                    {/*Input for the user*/}
                    <textarea name="latexinput" id="latexinput"/>
                </td>
                <td>
                    code latex généré
                </td>
            </tr>
        </table>
    </div>;
};