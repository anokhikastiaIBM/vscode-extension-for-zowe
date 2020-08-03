/*
 * This program and the accompanying materials are made available under the terms of the *
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at *
 * https://www.eclipse.org/legal/epl-v20.html                                      *
 *                                                                                 *
 * SPDX-License-Identifier: EPL-2.0                                                *
 *                                                                                 *
 * Copyright Contributors to the Zowe Project.                                     *
 *                                                                                 *
 */

import { IconHierarchyType, IconId, IIconItem } from "../index";
import { getIconPathInResources } from "../../../shared/utils";
import { isFolder } from "../../../shared/context";

const icon: IIconItem = {
    id: IconId.folder,
    type: IconHierarchyType.base,
    path: getIconPathInResources("folder-closed.svg"),
    check: (node) => isFolder(node),
};

export default icon;