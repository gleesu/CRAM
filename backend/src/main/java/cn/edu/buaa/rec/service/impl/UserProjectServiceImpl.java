package cn.edu.buaa.rec.service.impl;

import cn.edu.buaa.rec.dao.UserProjectMapper;
import cn.edu.buaa.rec.model.UserProject;
import cn.edu.buaa.rec.service.UserProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description:
 * @Author: suruo
 * @Email: csuruo@gmail.com
 * @Date: Created on 上午1:26 2018/03/09
 * @Modified by:
 */

@Service("UserProjectService")
public class UserProjectServiceImpl implements UserProjectService {

    @Autowired
    private UserProjectMapper userProjectMapper;

    @Override
    public Map<String, Object> applyProject(UserProject userProject) {

        Map<String, Object> result = new HashMap<>();

        Long maxId = userProjectMapper.selectMaxId();
        userProject.setId((maxId == null) ? 1 + (maxId+1));

        int sqlResult = userProjectMapper.insert(userProject);

        if(sqlResult == 1){
            result.put("Msg", "已申请");
        }else {
            result.put("Msg","请重新申请");
        }

        return result;
    }
}
