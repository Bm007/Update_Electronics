<?php
namespace Customer;

use Zend\Router\Http\Segment;

return array(
    'controllers' => array(        
        'invokables' => array(
            'Customer\Controller\Customer' => 'Customer\Controller\CustomerController',
        ),
    ),

    'router' => array(
        'routes' => array(
            'customer' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/customer[/:action]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',                        
                    ),
                    'defaults' => array(
                        'controller' => 'Customer\Controller\Customer',
                        'action'     => 'addcustomerbill',
                    ),
                ),
            ),

            'quotation' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/customer/createQuotation',                    
                    'defaults' => array(
                        'controller' => 'Customer\Controller\Customer',
                        'action'     => 'createquotation',
                    ),
                ),
            ),

            'addCustomer' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/customer/addCustomer',                    
                    'defaults' => array(
                        'controller' => 'Customer\Controller\Customer',
                        'action'     => 'addcustomer',
                    ),
                ),
            ),



        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'customer' => __DIR__ . '/../view',
        ),
    ),
);