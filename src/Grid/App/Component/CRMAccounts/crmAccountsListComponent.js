﻿ko.components.register('crmaccounts-list', {
    viewModel: function (params) {
        var self = ListViewModelBase(this);
        self.setValues(params);
    },
    template: { fromUrl: 'List?type=crmaccounts' }
});