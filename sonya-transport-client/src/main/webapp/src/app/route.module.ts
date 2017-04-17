/* 
 * Copyright (C) 2017 ss
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransportProfileForm} from './form/transport-profile/transport-profile.form';
import {TransportProfileList} from './component/transport-profile-list/transport-profile.list';
import {TransportProfileMap} from './component/transport-profile-map/transport-profile.map';

export class Links {
    static HOME = '';
    static PROFILE_LIST = 'ui/admin/profile-list';
    static PROFILE_FORM = 'ui/admin/profile';
    static PROFILE_MAP = 'ui/admin/profile-map';
}

const routes: Routes = [
    {path: Links.HOME, redirectTo: Links.PROFILE_LIST, pathMatch: 'full'},
    {path: Links.PROFILE_LIST, component: TransportProfileList},
    {path: Links.PROFILE_FORM, component: TransportProfileForm},
    {path: Links.PROFILE_FORM + "/:id", component: TransportProfileForm},
    {path: Links.PROFILE_MAP + "/:id", component: TransportProfileMap}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}