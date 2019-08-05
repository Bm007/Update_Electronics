<?php
namespace Customer\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class CustomerController extends AbstractActionController
{
    public function indexAction()
    {
    }

    public function addcustomerbillAction()
    {
        return new ViewModel();
    }

    public function createquotationAction()
    {
        return new ViewModel();
    }

    public function addcustomerAction()
    {
        return new ViewModel();
    }
}