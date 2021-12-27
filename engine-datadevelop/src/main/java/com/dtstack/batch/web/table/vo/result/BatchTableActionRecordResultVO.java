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

package com.dtstack.batch.web.table.vo.result;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.sql.Timestamp;

/**
 * @company: www.dtstack.com
 * @Author ：Nanqi
 * @Date ：Created in 11:05 2021/1/5
 * @Description：表操作记录信息
 */
@Data
@ApiModel("表操作记录信息")
public class BatchTableActionRecordResultVO {
    @ApiModelProperty(value = "记录ID")
    private Long id = 0L;

    @ApiModelProperty(value = "创建时间")
    private Timestamp gmtCreate;

    @ApiModelProperty(value = "修改时间")
    private Timestamp gmtModified;

    @ApiModelProperty(value = "是否删除")
    private Integer isDeleted = 0;

    @ApiModelProperty(value = "数栈租户ID")
    private Long tenantId;

    @ApiModelProperty(value = "项目ID")
    private Long projectId;

    @ApiModelProperty(value = "UIC租户ID")
    private Long dtuicTenantId;

    @ApiModelProperty(value = "表ID")
    private Long tableId;

    @ApiModelProperty(value = "用户ID")
    private Long userId;

    @ApiModelProperty(value = "用户名")
    private String userName;

    @ApiModelProperty(value = "操作SQL")
    private String actionSql;

    @ApiModelProperty(value = "操作")
    private String operate;
}