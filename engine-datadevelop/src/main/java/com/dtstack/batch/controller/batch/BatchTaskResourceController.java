/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.dtstack.batch.controller.batch;

import com.dtstack.batch.mapstruct.vo.TaskMapstructTransfer;
import com.dtstack.batch.service.task.impl.BatchTaskResourceService;
import com.dtstack.batch.web.task.vo.query.BatchTaskResourceGetResourcesVO;
import com.dtstack.batch.web.task.vo.result.BatchResourceResultVO;
import com.dtstack.engine.common.lang.coc.APITemplate;
import com.dtstack.engine.common.lang.web.R;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(value = "资源任务管理", tags = {"资源任务管理"})
@RestController
@RequestMapping(value = "/api/rdos/batch/batchTaskResource")
public class BatchTaskResourceController {

    @Autowired
    private BatchTaskResourceService resourceService;

    @PostMapping(value = "getResources")
    @ApiOperation("获得 资源-任务 列表")
    public R<List<BatchResourceResultVO>> getResources(@RequestBody BatchTaskResourceGetResourcesVO vo) {
        return new APITemplate<List<BatchResourceResultVO> >() {
            @Override
            protected List<BatchResourceResultVO> process() {
                return TaskMapstructTransfer.INSTANCE.BatchResourceListToBatchResourceResultVOList(resourceService.getResources(vo.getTaskId(),
                        vo.getProjectId(), vo.getType()));
            }
        }.execute();
    }
}